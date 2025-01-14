import {getMessages} from '@/lib/messages'

export default async function MessagesLayout({ children }) {

  const resData = getMessages();


  const totalMessages = resData.length;


  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr/>
      {children}
    </>
  );
}
