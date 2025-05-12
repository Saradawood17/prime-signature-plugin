const BackgroundCircles = ({ position = 'top-left' }) => {
    const positions = {
      'top-left': 'absolute top-0 left-0',
      'top-right': 'absolute top-0 right-0',
      'bottom-left': 'absolute bottom-0 left-0',
      'bottom-right': 'absolute bottom-0 right-0',
    };
  
    return (
      <div className={`${positions[position]} w-72 h-72 bg-yellow-300 opacity-30 rounded-full filter blur-3xl z-0`} />
    );
  };
  
  export default BackgroundCircles;  