import { CircularProgress, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import completeCheck from "../../assets/coraltick.png";
export const PercentageScore = ({ color, value }) => {
  const [track, setTrack] = useState("");

  useEffect(() => {
    let t;
    switch (color) {
      case "warning":
        t = "stroke-warning opacity-20";
        break;
      case "secondary":
        t = "stroke-secondary opacity-20";
        break;
      case "success":
        t = "stroke-success opacity-20";
        break;
      default:
        t = "stroke-danger opacity-20";
    }
    setTrack(t);
  }, [color]);
  return (
    <div className="w-12 h-12 relative z-0">
      {value === 100 ? (
        <Image src={completeCheck} alt="completed task" />
      ) : (
        <CircularProgress
          aria-label="Task Percentage"
          size="lg"
          value={value}
          classNames={{
            svg: "w-16 h-16 drop-shadow-md",
            value: `text-1xl font-bold ${color !== "warning" && "text-black"}`,
            track: track,
          }}
          className={`text-${color}`}
          showValueLabel={true}
        />
      )}
    </div>
  );
};
