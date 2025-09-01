'use client'
import React from 'react'
import { Button, useForm } from '@payloadcms/ui'

const getDate = (): string => {
  const now = new Date()
  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const year = now.getFullYear()
  return `${day}/${month}/${year}`
}

const PrintInvoice: React.FC = () => {
  const { fields } = useForm()

  const formattedDate = getDate()

  const handlePrint = () => {
    const patientName: string = 
  fields?.name?.value && typeof fields.name.value === 'string' 
    ? fields.name.value.toUpperCase() 
    : 'N/A';
    const patientAge = fields?.age?.value || 'N/A'
    const patientGender = fields?.gender?.value == 'male' ? 'M' : fields?.gender?.value == 'female' ? 'F' : 'N/A';
    const backgroundImage = `${window.location.origin}/presPad.jpg`

    const clinicInvoiceContent = ` <html>

<head>
    <style>
        @page {
            size: A4;
            margin: 0;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            width: 210mm;
            height: 297mm;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            width: 100%;
            height: 100%;
            padding: 40px;
            box-sizing: border-box;
            background-image: url('${backgroundImage}');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }

        .content {
            position: relative;
            z-index: 10;
            text-align: left;
            padding: 20px;
            border-radius: 8px;
            max-width: 600px;
            margin: auto;
        }

        h1 {
            margin-top: 0;
            font-size: 24px;
            color: #333;
        }

        p {
            font-size: 16px;
            margin: 5px 0;
        }

        @media print {
            body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="content">
            <p style=" position: absolute; top: 143px; left: 186px; width: 234px; display: flex; justify-content: center; font-size:18px"><strong> ${patientName}</strong></p>
            <p style=" position: absolute; top: 143px; left: 448px; width: 52px; display: flex; justify-content: center; ">${patientAge}</p>
            <p style=" position: absolute; top: 143px; left: 534px; width: 56px; display: flex; justify-content: center; ">${patientGender}</p>
            <p style=" position: absolute; top: 143px; left: 627px; width: 80px; display: flex; justify-content: center; "> ${formattedDate}</p>
        </div>
    </div>
</body>

</html>`

    const printWindow = window.open(
      '',
      '_blank',
      'toolbar=no,menubar=no,scrollbars=no,resizable=no',
    )
    if (printWindow) {
      printWindow.document.write(clinicInvoiceContent)
      printWindow.document.close()

      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 500)
    }
  }

  return <Button onClick={handlePrint}>Print Invoice</Button>
}

export default PrintInvoice
