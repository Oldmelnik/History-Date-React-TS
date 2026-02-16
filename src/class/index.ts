const FULL_CIRCLE_DEG = 360;
const k = FULL_CIRCLE_DEG / 2 / Math.PI;
export class CircleWithDots {
  private radius = 0;
  private gap = 0;
  private dots: HTMLDivElement[] = [];
  private currentRotation = 0;

  constructor(
    circle: HTMLDivElement,
    public currentIndex = 0,
    private dotSize = 20,
    private baseAngle = -90,
    private animationSteps = 20,
    private animationStepDelay = 50
  ) {
    this.radius = circle?.getBoundingClientRect()?.width / 2;
    this.dots = Array.from(circle.children) as HTMLDivElement[];
    this.gap = FULL_CIRCLE_DEG / this.dots.length;
  
    this.currentRotation = -this.currentIndex * this.gap;
    this.applyRotationToDots(this.currentRotation);
  }

  moveTo(newCurrent: number = 0) {
    const { currentIndex } = this;

    if (newCurrent === currentIndex) return;

    const targetRotation = -newCurrent * this.gap;
    const rotateAngle = targetRotation - this.currentRotation;
    const rotateAngleChunk = rotateAngle / this.animationSteps;

    let cnt = 0;
    const interval = setInterval(() => {
      const newRotation = this.currentRotation + (rotateAngleChunk * cnt++);
      this.applyRotationToDots(newRotation);
      if (cnt > this.animationSteps) {
        clearInterval(interval);
        this.currentIndex = newCurrent;
        this.currentRotation = targetRotation;
      }
    }, this.animationStepDelay);
  }

  applyRotationToDots(angle: number = 0) {
    const { gap, baseAngle } = this;

    this.dots.forEach((dot, index) => {
      const cos = Math.cos((gap * index + baseAngle + angle) / k);
      const sin = Math.sin((gap * index + baseAngle + angle) / k);
      dot.style.left =
        this.radius - (this.radius * cos + this.dotSize / 2) + "px";
      dot.style.top =
        this.radius - (this.radius * sin + this.dotSize / 2) + "px";
    });
  }

  static nextDotIndex(i: number, max: number) {
    if (i >= max - 1) return 0;
    return i + 1;
  }

  static prevDotIndex(i: number, max: number) {
    if (i <= 0) return max - 1;
    return i - 1;
  }
}
