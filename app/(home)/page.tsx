import { CustomersReviews } from '@/containers/home/customers';
import { Herobanner } from '@/containers/home/Herobanner';
import { Nosproduits } from '@/containers/home/nos-produits';
import { Partenaire } from '@/containers/home/partenaire';
import { Question } from '@/containers/home/question-frequentes';
import { SocietePeru } from '@/containers/home/societe-peru';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function HomePage() {
  return <>
  <Herobanner/>
  <Nosproduits/>
  <Partenaire/>
  <CustomersReviews/>
  <SocietePeru/>
  <Question/>
  </>;
}
