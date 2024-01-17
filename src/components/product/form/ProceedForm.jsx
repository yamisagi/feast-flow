import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useContext, useState } from 'react';
import { CartContext } from '@/context/CartContext';
import useHttp from '@/hooks/useHttp';
import { Form } from '@/components/ui/form';
import Error from '@/components/product/main/Error';
import renderButton from '@/util/renderButton';
import FormGroup from '@/components/product/form/FormGroup';
import useHideModalTimer from '@/util/hideModalTimer';

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
  const [successOpen, setSuccessOpen] = useState(false);
  const { isLoading, error, sendRequest } = useHttp({
    url: `${import.meta.env.VITE_API_URL}/orders`,
    config: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });

  useHideModalTimer(
    successOpen,
    setSuccessOpen,
    cartFuncs,
    openChanged,
    setModalOpen
  );

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
        }}
      >
        <FormGroup form={form} />
        {renderButton(form, isLoading, successOpen, setSuccessOpen, error)}
      </form>
    </Form>
  );
};

export default ProceedForm;
