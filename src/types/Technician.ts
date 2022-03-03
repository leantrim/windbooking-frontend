export interface Technician {
  id?: string;
  email?: string;
  name?: string;
  userType?: string;
  userID?: string;
  workPermit?: boolean;
  driverLicense?: boolean;
  tools?: [string];
  certifications?: [string];
  achievements?: [string];
  transportVehicle?: {
    winterTyres?: {
      type?: boolean;
    };
  };
}
