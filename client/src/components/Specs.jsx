import React from 'react';
import SpecEntry from './SpecEntry';

const Specs = props => {
  // const calculateSpecs = spec => {
  //   let count = 0;
  //   props.data.forEach(comment => {
  //     count += comment[spec] / 4;
  //   });
  //   return count;
  // };
  return (
    <div className="specs">
      <SpecEntry
        id="size"
        attribute1="TOO SMALL"
        attribute2="PERFECT"
        attribute3="TOO LARGE"
        bar={props.data.avgSize / 4 * 100}
      />
      <SpecEntry
        id="width"
        attribute1="TOO NARROW"
        attribute2="PERFECT"
        attribute3="TOO WIDE"
        bar={props.data.avgWidth / 4 * 100}
      />
      <SpecEntry
        id="comfort"
        attribute1="UNCOMFORTABLE"
        attribute2="null"
        attribute3="COMFORTABLE"
        bar={props.data.avgComfort / 4 * 100}
      />
      <SpecEntry
        id="quality"
        attribute1="POOR"
        attribute2="null"
        attribute3="PERFECT"
        bar={props.data.avgQuality / 4 * 100}
      />
    </div>
  );
};

export default Specs;
