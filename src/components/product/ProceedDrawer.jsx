import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import ProceedForm from './ProceedForm';

const ProceedDrawer = ({ children, open, setOpen, setModalOpen }) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Let&apos;s get started</DrawerTitle>
          <DrawerDescription>
            We&apos;ll need some information to get you started.
          </DrawerDescription>
        </DrawerHeader>
        <ProceedForm openChanged={setOpen} setModalOpen={setModalOpen} />
        <DrawerFooter>
          <Button>
            <DrawerClose asChild onClick={() => setModalOpen(false)}>
              <span>Cancel</span>
            </DrawerClose>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ProceedDrawer;
