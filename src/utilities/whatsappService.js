import { getPayload } from 'payload'
import config from '@payload-config'

// Main WhatsApp Message Sender
export const sendMessage = async (
  number,
  templateName,
  parameters = {},
  userName,
) => {
  const token = process.env.WHATSAPP_API_TOKEN || ''
  const phoneNumberId = process.env.WHATSAPP_PHONE_ID || ''

  if (!token || !phoneNumberId) {
    console.error('❌ Missing WhatsApp API token or phone number ID')
    return null
  }

  const templates = {
    new_request_hindi: {
      language: 'en_US',
      params: []
    },
    reminder: {
      language: 'en_US',
      params: ['name', 'date']
    },
    new_request: {
      language: 'en_US',
      params: ['name']
    }
  }

  const selected = templates[templateName]
  if (!selected) {
    console.error(`🚫 Template "${templateName}" is not defined`)
    return null
  }

  const components =
    selected.params.length > 0
      ? [
          {
            type: 'body',
            parameters: selected.params.map((key) => ({
              type: 'text',
              parameter_name: key || "",
              text: parameters[key] || ''
            }))
          }
        ]
      : []

  const body = {
    messaging_product: 'whatsapp',
    to: number,
    type: 'template',
    template: {
      name: templateName,
      language: { code: selected.language },
      ...(components.length && { components })
    }
  }

  const url = `https://graph.facebook.com/v22.0/${phoneNumberId}/messages`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(body)
    })

    const result = await response.json()
    const status = response.ok ? 'sent' : 'failed'

    // Log message attempt
    await logWhatsappMessage({
      to: number,
      templateName,
      status,
      sentAt: new Date().toISOString(),      
      userName
    })

    if (!response.ok) {
      console.error('❌ WhatsApp API Error:', result)
      return null
    }

    return result
  } catch (error) {
    console.error('❌ Network error:', error.message)

    // Log failure as well
    await logWhatsappMessage({
      to: number,
      templateName,
      status: 'failed',
      sentAt: new Date().toISOString(),
      userName
    })

    return null
  }
}

// Save log to Payload CMS
const logWhatsappMessage = async ({ to, templateName, status, sentAt, userName }) => {
  try {
    const payload = await getPayload({ config })
    await payload.create({
      collection: 'whatsapp',
      data: {
        to,
        templateName,
        status,
        sentAt,
        userName
      }
    })
  } catch (err) {
    console.error('⚠️ Failed to log WhatsApp message to Payload:', err.message)
  }
}
