import React, { FC, useState } from "react";
import Condition1 from "../../routing/Condition1";
import Condition10 from "../../routing/Condition10";
import Condition11 from "../../routing/Condition11";
import Condition12 from "../../routing/Condition12";
import Condition13 from "../../routing/Condition13";
import Condition14 from "../../routing/Condition14";
import Condition15 from "../../routing/Condition15";
import Condition16 from "../../routing/Condition16";
import Condition17 from "../../routing/Condition17";
import Condition18 from "../../routing/Condition18";
import Condition19 from "../../routing/Condition19";
import Condition2 from "../../routing/Condition2";
import Condition3 from "../../routing/Condition3";
import Condition4 from "../../routing/Condition4";
import Condition5 from "../../routing/Condition5";
import Condition6 from "../../routing/Condition6";
import Condition7 from "../../routing/Condition7";
import Condition8 from "../../routing/Condition8";
import Condition9 from "../../routing/Condition9";

const DebugConditionSelector: FC = () => {
  const [debugCondition, SetDebugCondition] = useState(1);
  return (
    <>
      <div>
        conditions
        <button onClick={() => SetDebugCondition(1)}>1</button>
        <button onClick={() => SetDebugCondition(2)}>2</button>
        <button onClick={() => SetDebugCondition(3)}>3</button>
        <button onClick={() => SetDebugCondition(4)}>4</button>
        <button onClick={() => SetDebugCondition(5)}>5</button>
        <button onClick={() => SetDebugCondition(6)}>6</button>
        <button onClick={() => SetDebugCondition(7)}>7</button>
        <button onClick={() => SetDebugCondition(8)}>8</button>
        <button onClick={() => SetDebugCondition(9)}>9</button>
        <button onClick={() => SetDebugCondition(10)}>10</button>
        <button onClick={() => SetDebugCondition(11)}>11</button>
        <button onClick={() => SetDebugCondition(12)}>12</button>
        <button onClick={() => SetDebugCondition(13)}>13</button>
        <button onClick={() => SetDebugCondition(14)}>14</button>
        <button onClick={() => SetDebugCondition(15)}>15</button>
        <button onClick={() => SetDebugCondition(16)}>16</button>
        <button onClick={() => SetDebugCondition(17)}>17</button>
        <button onClick={() => SetDebugCondition(18)}>18</button>
        <button onClick={() => SetDebugCondition(19)}>19</button>
      </div>

      {debugCondition === 1 && <Condition1 />}
      {debugCondition === 2 && <Condition2 />}
      {debugCondition === 3 && <Condition3 />}
      {debugCondition === 4 && <Condition4 />}
      {debugCondition === 5 && <Condition5 />}
      {debugCondition === 6 && <Condition6 />}
      {debugCondition === 7 && <Condition7 />}
      {debugCondition === 8 && <Condition8 />}
      {debugCondition === 9 && <Condition9 />}
      {debugCondition === 10 && <Condition10 />}
      {debugCondition === 12 && <Condition11 />}
      {debugCondition === 12 && <Condition12 />}
      {debugCondition === 13 && <Condition13 />}
      {debugCondition === 14 && <Condition14 />}
      {debugCondition === 15 && <Condition15 />}
      {debugCondition === 16 && <Condition16 />}
      {debugCondition === 17 && <Condition17 />}
      {debugCondition === 18 && <Condition18 />}
      {debugCondition === 19 && <Condition19 />}
    </>
  );
};

export default DebugConditionSelector;
