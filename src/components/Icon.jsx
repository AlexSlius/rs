const Icon = ({ svg, symbolId = "", classNames = [] }) => {

  return symbolId ? (
    <svg className={classNames.join(" ")}>
      <use xlinkHref={`#${svg.id}_${symbolId}`} />
    </svg>
  ) : (
    <svg className={classNames.join(" ")} viewBox={svg.viewBox}>
      <use xlinkHref={`#${svg.id}`} />
    </svg>
  );
};

export default Icon;
