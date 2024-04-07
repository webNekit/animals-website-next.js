"use client";
import BankCards from '@/components/BankCards/BankCards';
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import RequisitesData from '@/components/RequisitesData/RequisitesData';
import useRequisites from '@/hooks/Requisites/useRequisites';

export default function requisites() {

  const data = useRequisites();

  return (
    <>
        <HeaderPage introTitle={'Реквизиты'} />
        <section className="w-full py-12">
          <div className="container mx-auto">
            <div className="w-full flex items-start flex-col gap-10">
              <h2 className="inline-flex py-1 text-left text-2xl font-medium border-b-2 border-primary">Перевод на карту</h2>
              <BankCards getData={data} />
              <h2 className="inline-flex py-1 text-left text-2xl font-medium border-b-2 border-primary">Банковский перевод</h2>
              <RequisitesData getData={''} />
            </div>
          </div>
        </section>
    </>
  )
}
