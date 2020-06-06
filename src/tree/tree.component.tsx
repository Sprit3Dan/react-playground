import * as React from 'react';
import { v4 as uuidV4} from 'uuid';

import { Tree } from './index.d'
import "./tree.css";

function useLeafUpdater(initialV: Tree.Leaf): [Tree.Leaf, React.Dispatch<Partial<Tree.Leaf>>] {
    const [leaf, setLeaf] = React.useState(initialV);

    function updateLeaf(diff: Partial<Tree.Leaf>) {
        const updatedLeaf = Object.assign(leaf, diff, { id: leaf.id });
        setLeaf(updatedLeaf);
    }

    return [leaf, updateLeaf];
}

function noop() {}

function TreeComponent(p: Tree.TreeRootProps) {
    const [isEditing, setIsEditing] = React.useState(false);
    const [leaf, updateLeaf] = useLeafUpdater(p.leaf);
    
    return (
        <>
            <div className="box" key={leaf.value}>
                <div className="boxContents">
                    <label>Leaf</label>
                    {isEditing
                        ? <input onChange={(e) => updateLeaf({ value: Number(e.target.value) })} defaultValue={leaf.value}/>
                        : <label>value: {leaf.value}</label>}
                    <label>children: {leaf.children.length}</label>
                </div>
                <div className="boxControls">
                    {isEditing
                        ? <button onClick={() => {
                            setIsEditing(false);
                            p.updateLeaf(leaf);
                        }}>Done</button>
                        : <button onClick={() => setIsEditing(true)}>Edit</button>
                    }
                    <button onClick={() => {
                        updateLeaf({
                            children: [...leaf.children, {
                                id: uuidV4(),
                                children: [],
                                value: 0
                            }]
                        });
                        p.updateLeaf(leaf);
                    }}>Add child</button>
                </div>
            </div>    
            {leaf.children.map(it => <TreeComponent leaf={it} updateLeaf={p.updateLeaf}/>)}
        </>
    );
}

export default TreeComponent as React.FunctionComponent<Tree.TreeRootProps>;