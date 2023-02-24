import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../shared/utils/redux/hooks'
import { fetchCompanyData } from '../shared/utils/redux/reducers/companyReducer';
import { CompanySelector, CompanyStringSelector, DateStringSelector } from '../shared/utils/redux/selectors/companySelector';


const CompanyButtonContainer = () => {

   const cs =  useAppSelector(CompanyStringSelector)
   const ds = useAppSelector(DateStringSelector)
  

   console.log(useAppSelector(CompanySelector))

  const dispatch = useAppDispatch();

  const HandleClick= ()=>{
dispatch(fetchCompanyData({
    companyString: cs,
    dateString: ds
  }))

  }
  return (
    <Button onClick={()=>HandleClick()}>submit</Button>
  )
}

export default CompanyButtonContainer
