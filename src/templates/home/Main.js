import Showcase from '../../components/organims/Showcase'
import { MainContainer } from './style'

const Main = (props) => {
  return (
    <MainContainer>
      <Showcase products={props.products} />
    </MainContainer>
  )
}

export default Main
