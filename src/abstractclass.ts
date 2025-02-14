/**
 * Abstract base class.
 * Cannot be instantiated directly.
 */
abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ) {}
}

class Instagram extends TakePhoto {  
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number
  ) {
    // constructor implementation  ->>>>>In TypeScript, a constructor is a special method of a class that is automatically called when an instance of the class is created. It is used to initialize the object's properties and perform any setup required for the object.

    super(cameraMode, filter);
  }

  /**
   * Abstract method to be implemented by derived classes.
   */
}
