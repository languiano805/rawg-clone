import { Card, Skeleton, SkeletonText, CardBody } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <div>
      <Card>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCardSkeleton;
