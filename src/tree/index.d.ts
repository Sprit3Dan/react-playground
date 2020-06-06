export namespace Tree {
    interface TreeRootProps {
        leaf: Leaf
        updateLeaf: (leaf: Leaf) => void;
    }

    interface TreeLeafProps {

    }

    type Leaf = {
        id: string;
        children: Array<Leaf>;
        value: number;
    }
}