import SpinnerContainer from './components/SpinnerContainer'

export default ({color, number, shape, glow, shadow}) => {
  color = color || '#ffffff';
  number = number || 8;
  shape = shape || 'circle';
  

  return (
    <SpinnerContainer />
  )

}