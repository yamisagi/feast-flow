import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import useHttp from '@/hooks/useHttp';
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
import LoadingButton from './LoadingButton';
import Error from '@/components/product/Error';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email.',
  }),
  name: z.string().min(5, {
    message: 'Name must be at least 5 characters.',
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
  const { state, cartFuncs } = useContext(CartContext);
  const { isLoading, error, data, sendRequest } = useHttp({
    url: `${import.meta.env.VITE_API_URL}orders`,
    config: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      name: '',
      address: '',
    },
  });

  const onSubmit = (data) => {
    sendRequest(
      JSON.stringify({
        order: {
          items: state.cart,
          customer: {
            email: data.email,
            name: data.name,
            address: data.address,
          },
        },
      })
    );
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
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
            if (!isLoading && error === null) {
              console.log(isLoading, error, data);
              cartFuncs.clearCart();
              openChanged(false);
              setModalOpen(false);
            }
          }}
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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

          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button type='submit'>Proceed</Button>
          )}
        </form>
      </Form>
    </>
  );
};

export default ProceedForm;
