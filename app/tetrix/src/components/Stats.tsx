import type { IStatsProps } from "../types/game";
import "./stats.css";

export default function Stats({ clearedLines, level }: IStatsProps) {
  return (
    <div className="stats">
      <p className="cleared">Lines cleared: {clearedLines}</p>
      <p className="level">Level: {level}</p>
    </div>
  );
}
