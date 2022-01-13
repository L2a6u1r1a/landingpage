import { computed, makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
import { plantIcons, navigationLocations, externalLinks } from "./Data";
import { dataAreaType, IPlant, pageLocationType } from "./Types";

class StoreSingleton {
  public initialised = false;

  public firstEntered = false;

  public currentLocation: pageLocationType | undefined;
  public navigationElementInFocus: pageLocationType | null;

  public mousePosition = { x: 0, y: 0 };
  public mouseHidden = true;
  public followHidden = true;
  public mouseClicked = false;

  public hobbleAnimationRunning = false;
  public leaveAnimationRunning = false;
  public waitingForEnterOrLeaveAnimationRunning = true;
  public liveAnimationRunning = computed(
    () =>
      !this.hobbleAnimationRunning.valueOf() &&
      !this.leaveAnimationRunning.valueOf()
  );
  public gameRunning = false;

  public dataElementInFocus: dataAreaType | null;

  public plants: IPlant[] = [];
  public score = 0;

  constructor() {
    makeAutoObservable(this);
    this.navigationElementInFocus = null;
    this.dataElementInFocus = null;
    window.addEventListener("hashchange", () => this.navigate());
    this.navigate();
  }

  public init(): void {
    this.initialised = true;
  }

  public checkAndHobbleInStart(): void {
    if (!this.firstEntered) {
      this.hobbleAnimationRunning = true;
      this.waitingForEnterOrLeaveAnimationRunning = false;
    }
  }

  public hobbleInEnd(): void {
    this.hobbleAnimationRunning = false;
    this.firstEntered = true;
  }

  public checkAndGameStart(): void {
    if (!this.gameRunning) {
      this.gameRunning = true;
    }
  }

  public tryAndPlantPlant(x: number, y: number): void {
    if (
      this.currentLocation === "welcome" &&
      this.gameRunning &&
      this.plants.length < 10000
    ) {
      this.plants.push(this.createNewPlant(x, y));
    }
  }

  private createNewPlant(x: number, y: number): IPlant {
    const randomConstant = Math.floor(Math.random() * 3) + 2;
    const size =
      (Math.max(window.innerWidth, window.innerHeight) / 100) * randomConstant;
    const icon = plantIcons[Math.floor(Math.random() * plantIcons.length)];
    const mirrored = Math.round(Math.random()) === 0 ? true : false;
    return {
      plantKey: uuidv4(),
      icon,
      x: x - size,
      y: y - size,
      size,
      mirrored,
      live: true,
    };
  }

  public eatStart(score: boolean): void {
    if (score) {
      const points = this.plants.length;
      this.score +=
        Math.round(points / 10) +
        Math.floor(points / (points + points.toString().length));
    }
    this.plants = [];
  }

  public checkAndSetDataElementInFocus(dataArea: dataAreaType): void {
    if (this.dataElementInFocus !== dataArea) {
      this.dataElementInFocus = dataArea;
    } else {
      this.dataElementInFocus = null;
    }
  }

  public setNavigationElementInFocus(
    locationKey: pageLocationType | null | undefined = this.currentLocation
  ): void {
    if (locationKey) {
      this.navigationElementInFocus = locationKey;
    } else {
      this.navigationElementInFocus = null;
    }
  }

  public setNavigation(location: pageLocationType): void {
    window.location.hash = location;
  }

  public navigate(): void {
    const currentHash = window.location.hash.replace("#", "");
    if (Object.keys(navigationLocations).includes(currentHash)) {
      this.currentLocation = currentHash as pageLocationType;
    } else {
      this.currentLocation = "welcome";
    }
  }

  public navigateExternalStart(): void {
    if (this.currentLocation && this.isLeavableLocation()) {
      this.waitingForEnterOrLeaveAnimationRunning = true;
      window.location.href = String(externalLinks[this.currentLocation]);
    }
  }

  public isLeavableLocation(): boolean {
    if (this.currentLocation && externalLinks[this.currentLocation]) {
      return true;
    } else {
      return false;
    }
  }

  public checkAndSetLeaveAnimation(): void {
    if (this.isLeavableLocation()) {
      this.leaveAnimationRunning = true;
    }
  }
}

export const Store = new StoreSingleton();
