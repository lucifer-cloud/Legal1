import { sendMessage } from "./whatsappService"



const patientReminderMessage = async (name, phoneNumber, date) => {
  if (!phoneNumber || !name || !date) return

  const chatId = `91${phoneNumber}@c.us`
  try {
    await sendMessage(chatId, 'reminder', {name: name, date: date},name);
  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
  }
}

export default patientReminderMessage
