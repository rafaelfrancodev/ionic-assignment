export class Profile {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    address: {
        street: string;
        city: string;
        state: string;
    };
    jobTitle: string;
    phoneNumber: string;
    profilePhoto: string;

    constructor(firstName: string, lastName: string, dateOfBirth: string, street: string, city: string, state: string, jobTitle: string, phoneNumber: string, profilePhoto: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = {
            street: street,
            city: city,
            state: state
        };
        this.jobTitle = jobTitle;
        this.phoneNumber = phoneNumber;
        this.profilePhoto = profilePhoto;
    }
}