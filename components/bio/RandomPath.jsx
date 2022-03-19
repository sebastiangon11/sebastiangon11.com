function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const getIntRandomBetween = (min, max) => Math.round(getRandomBetween(min, max));

const easings = [
  'cubic-bezier(0.08, 0.03, 0.43, 0.92)',
  'cubic-bezier(0.37, 0, 0.63, 1)',
  'cubic-bezier(0.79, 0.03, 0.23, 0.93)',
];

export const RandomPath = ({ src }) => {
  const randomDurationX = getIntRandomBetween(20, 60);
  const randomDurationY = getIntRandomBetween(20, 60);

  const styles = {
    dot: {
      opacity: '0.1',
      position: 'fixed',
      width: '100%',
      height: '100%',
      animation: `xAxis ${randomDurationX}s infinite`,
      animationTimingFunction: easings[getIntRandomBetween(0, easings.length - 1)],
    },
    dot__after: {
      display: 'block',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundImage: `url(${src})`,
      backgroundSize: 'contain',
      animation: `yAxis ${randomDurationY}s infinite`,
      animationTimingFunction: easings[getIntRandomBetween(0, easings.length - 1)],
    },
  };

  return (
    <div style={styles.dot}>
      <div style={styles.dot__after}></div>
    </div>
  );
};
