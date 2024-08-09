import FormPage from '@/components/form-page';
import { createMessage } from '@/app/actions/posts';

export default function NewMessagePage() {

  return (
    <>
      <h2>New Message</h2>
      <FormPage createMessage={createMessage}></FormPage>

    </>
  );
}
