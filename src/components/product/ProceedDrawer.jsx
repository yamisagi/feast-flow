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

const ProceedDrawer = ({ children, open, setOpen }) => {
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
        <ProceedForm openChanged={setOpen} />
        <DrawerFooter>
          <Button>
            <DrawerClose asChild>
              <span>Cancel</span>
            </DrawerClose>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ProceedDrawer;
