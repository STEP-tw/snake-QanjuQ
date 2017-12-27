const Snake=function(head,body) {
  this.head=head;
  this.body=body;
}

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function() {
    this.body.unshift(new Position(Infinity,Infinity,this.direction));
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  didSnakeEatItself : function(){
    let head = this.head;
    return this.body.some(function(bodyPart){
      return head.isSameCoordAs(bodyPart);
    });
  },

  didDie : function(){
    let headCoord = this.head;
    return this.didSnakeEatItself(headCoord) ||
    this.didHitLeftWall(headCoord) ||
    this.didHitTopWall(headCoord) ||
    this.didHitBottomWall(headCoord) ||
    this.didHitRightWall(headCoord);
  },
  didHitLeftWall :function(headCoord){
    return headCoord.x == 0;
  },
  didHitRightWall : function(headCoord){
    return headCoord.x == 119;
  },
  didHitTopWall : function(headCoord){
    return headCoord.y == 0;
  },
  didHitBottomWall : function(headCoord){
    return headCoord.y == 59;
  },
}
