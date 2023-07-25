import { CarProps } from '@/types';
import React from 'react';

interface cardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CardDetails = ({ isOpen, closeModal, car }: cardDetailsProps) => {
  return <div>CardDetails</div>;
};

export default CardDetails;
