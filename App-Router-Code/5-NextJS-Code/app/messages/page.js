import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';

export default async function MessagesPage() {
  
  const response = getMessages();
  console.log('messagesPage')


  if (!response || response.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={response} />;
}
