import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import type { BLOCK, Scripts } from '../types';
import styles from './ScriptEditor.module.css';
import { ScriptEditSpace } from './scriptEditSpace/ScriptEditSpace';
import { ScriptPalette } from './scriptPalette/ScriptPalette';

type Props = {
  scripts: Scripts;
  setScripts: Dispatch<SetStateAction<Scripts>>;
};
export const ScriptEditor = (props: Props) => {
  const [targetBlock, setTargetBlock] = useState<BLOCK | null>(null);
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const { scripts, setScripts } = props;
  return (
    <div className={styles.main}>
      <ScriptEditSpace
        scripts={scripts}
        setScripts={setScripts}
        targetBlock={targetBlock}
        targetPos={targetPos}
      >
        <ScriptPalette setTargetBlock={setTargetBlock} setTargetPos={setTargetPos} />
      </ScriptEditSpace>
    </div>
  );
};
