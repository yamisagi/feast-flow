import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z.string().min(5, {
    message: 'Name must be at least 5 characters.',
  }),
  surname: z.string().min(5, {
    message: 'Surname must be at least 5 characters.',
  }),
  address: z.string().min(
    8,
    {
      message: 'Address must be at least 8 characters.',
    },
    'Address must be at least 8 characters.'
  ),
});

const ProceedForm = ({ openChanged, setModalOpen }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      surname: '',
      address: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        className='space-y-3 p-5'
        onSubmit={(e) => {
          e.preventDefault();
          if (!form.formState.isValid) {
            form.trigger();
            return;
          }
          form.handleSubmit(onSubmit)();
          openChanged(false);
          setModalOpen(false);
        }}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='surname'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surname</FormLabel>
              <FormControl>
                <Input placeholder='Surname' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='address'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder='Address' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Proceed</Button>
      </form>
    </Form>
  );
};

export default ProceedForm;
