// this is for the canvas JavaScript implementation for the colors as we cannot use CSS here
const colorSelection = (t) => {
  let color = null;
  
  switch(true) {
    case t < 5:
      color = '#2f358f';
      break;
    
    case t <= 10:
      color = '#0a56a2';
      break;

    case t <= 15:
      color = '#1aa79d';
      break;

    case t <= 20:
      color = '#17a456';
      break;

    case t <= 25:
      color = '#fef036';
      break;

    case t <= 30:
      color = '#fec42e';
      break;

    case t <= 35:
      color = '#fd9326';
      break;

    case t <= 40:
      color = '#f16631';
      break;

    case t <= 55:
      color = '#eb212f';
      break;

    default: 
      color = '#ffffff';
  }

  return color;
}

export default colorSelection;