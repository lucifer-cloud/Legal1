import { sendMessage } from './whatsappService'
import type { CollectionAfterChangeHook } from 'payload'

const newPatientNotification: CollectionAfterChangeHook = async ({ doc, operation }) => {
  const logPrefix = `[WhatsApp Notification] ${new Date().toLocaleString()}`;

  if (operation !== 'create') return;
  const phoneNumber = doc?.primaryNumber;
  const name = doc?.name;
  if (!phoneNumber) return;

  const chatId = `91${phoneNumber}`;

  try {
    await Promise.all([
      sendMessage(chatId, 'new_request',{name: name}, name),
      sendMessage(chatId, 'new_request_hindi',{}, name)
    ]);
    console.log(`${logPrefix} - Message sent to ${doc?.name || 'Unknown'} (${phoneNumber})`);
  } catch (error) {
    console.error(`${logPrefix} - Error sending message:`, error);
  }
};

export default newPatientNotification;
