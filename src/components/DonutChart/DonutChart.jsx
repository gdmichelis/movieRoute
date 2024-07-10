import "./DonutChart.css";

export default function DonutChart({ number }) {
  return (
    <figure>
      <div className="chart-container">
        <svg
          className="donut"
          aria-labelledby="IMDB Rating Chart"
          style={{ width: "100px", height: "100px" }}
          viewBox="0 0 100 100"
          role="img"
        >
          <title id="imdb-rating">{`IMDB Score: ${10 * number}%`}</title>
          <circle
            className="dnt-hole"
            r="41"
            cx="40"
            cy="50"
            style={{
              fill: "#081c22",
            }}
            role="presentation"
          ></circle>
          <circle
            className="dnt-ring"
            aria-labelledby="IMDB Score"
            r="31.83098862"
            cx="40"
            cy="50"
            style={{
              fill: "transparent",
              stroke: "#faf8f6",
              strokeWidth: "5px",
            }}
          ></circle>
          <circle
            className="dnt-segment"
            r="31.83098862"
            cx="40"
            cy="50"
            strokeDasharray={`${2 * 10 * number} ${200 - 2 * 10 * number}`}
            style={{
              fill: "transparent",
              stroke: "#c8d547",
              strokeLinecap: "round",
              strokeWidth: "6px",
              strokeDashoffset: "50",
            }}
          ></circle>
          <g className="chart-text-container">
            <text className="chart-text" x="20%" y="60%">
              {10 * number}
            </text>
            <text className="chart-text-percentage" x="51%" y="50%">
              %
            </text>
          </g>
        </svg>
      </div>
    </figure>
  );
}
