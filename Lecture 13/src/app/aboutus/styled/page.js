import Button from '@/app/components/StyledButton';
import React from 'react';

export default function StyledPage() {
  return (
    <div className='p-6'>
      <h2 className='pageTitle'>Styled Components Example</h2>

      <Button primary> Primary Button</Button>
      <Button>Secondary Button</Button>
    </div>
  );
}
