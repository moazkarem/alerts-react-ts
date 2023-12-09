import Alert from "./components/AlertUi/Alert"
import { BellRing } from 'lucide-react';


const App = () => {
  return (
    <div>
      <Alert type={"alert-wrapper"} icon_head={<BellRing />}  
      title={'Something Went Wrong'}
      desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos odio consectetur vel cum quod earum!'
      />

<Alert type={"alert-default"} icon_head={<BellRing />}  
      title={'Alert Default Theme'}
      desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos odio consectetur vel cum quod earum!'
      />

<Alert type={"alert-info"} icon_head={<BellRing />}  
      title={'Alert Info Theme'}
      desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos odio consectetur vel cum quod earum!'
      />

<Alert type={"alert-Success"} icon_head={<BellRing />}  
      title={'Alert Info Theme'}
      desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos odio consectetur vel cum quod earum!'
      />

<Alert type={"alert-error"} icon_head={<BellRing />}  
      title={'Alert Info Theme'}
      desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos odio consectetur vel cum quod earum!'
      />

    </div>
  )
}

export default App
