import React, {useState} from 'react';
import styles from './Form.module.css'

const Form = ({formdata,setFormdata}) => {
    const [newData, setNewData] = useState({});
    const addData=(e)=>{
        e.preventDefault()
       setNewData({...formdata})
        setFormdata({name:'',lastname:'',email:'',password:''})
    }



    return (<>
      <div className={styles.header_form}>Try it free 7 days then $20/mo</div>
      <form  className={styles.form} action="">
          <input
            value={formdata.name}
            onChange={(e)=>setFormdata({...formdata,name:e.target.value})}
            type="text" placeholder={'Name'}
          />
          <input
            value={formdata.lastname}
            onChange={(e)=>setFormdata({...formdata,lastname:e.target.value})}
            type="text" placeholder={'Last Name'}
          />
          <input
            value={formdata.email}
            onChange={(e)=>setFormdata({...formdata,email:e.target.value})}
            type="email" placeholder={'Email Address'}
          />
          <input
            value={formdata.password}
            onChange={(e)=>setFormdata({...formdata,password:e.target.value})}
            type="password" placeholder={'Password'}
          />
          <button onClick={addData}> add</button>
      </form>
          <p>By clicking the button, you are agreeing to <b>Terms and Services</b> </p>

          {newData.name ? <div className={styles.new_data}>
              <h3>your info</h3>
              <p>{newData.name}</p>
              <p>{newData.lastname}</p>
              <p>{newData.email}</p>
              <p>{newData.password}</p>
          </div>
          : <h3 className={styles.h3}>input your data please</h3>
          }
      </>
    );
};

export default Form;
