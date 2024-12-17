import Management from '@/app/compoents/(story)/Management'
// import Vision from '@/app/compoents/(story)/Vision';
import Form from '@/app/compoents/Form/Form'
import dynamic from 'next/dynamic';
import React from 'react'
const Mission = dynamic(() => import('@//app/compoents/(story)/Mission'), { ssr: false });

const page = () => {
  return (
    <div>
      {/* <Vision /> */}
      <Mission />
      <Management/>
      <br/>
      <Form />
    </div>
  )
}

export default page