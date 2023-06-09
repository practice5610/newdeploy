"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUTStoreByIDResponseExamples = exports.GETStoreByIDResponseExamples = exports.GETStoresResponseExamples = exports.GETStoresCountResponseExamples = exports.POSTStoreResponseExamples = void 0;
const constants_1 = require("../../../constants");
// TODO: Use helpers for testing to build the response data here
exports.POSTStoreResponseExamples = {
    SUCCESS: {
        _id: '603e712662c87e5e629220d4',
        companyName: 'TEST COMPANY NAME',
        emails: ['test@company.com'],
        phoneNumber: '+13050001122',
        number: '55',
        street1: 'weston road',
        street2: 'suite 106',
        city: 'Weston',
        state: 'FL',
        zip: '33326',
        country: 'US',
        pin: 12345,
        createdAt: 1614704934,
        updatedAt: 1614704934,
        companyLogoUrl: 'https://picsum.photos/200',
        coverImageUrl: 'https://picsum.photos/200',
        companyType: 'Brick & Mortar',
        companyDescription: 'TEST PURPOSE ONLY',
        fein: 123456789,
        years: 5,
        storeType: 'Online',
        links: ['https://qa.boomcard.net/'],
        _tags: ['TEST'],
        _geoloc: {},
        openingTime: 0,
        closingTime: 0,
        days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
        merchant: {
            uid: 're5OljVl3KObKLopKdxpOQBWPL82',
            name: 'Daniel Steve',
            firstName: 'Daniel',
            lastName: 'Steve',
        },
    },
};
exports.GETStoresCountResponseExamples = {
    SUCCESS: {
        success: true,
        message: constants_1.APIResponseMessages.SUCCESS,
        data: {
            count: 4,
        },
    },
};
exports.GETStoresResponseExamples = {
    // TODO: Update to use ResponseAPI
    SUCCESS: [
        {
            _id: '601047a96ed5710fb365e751',
            companyName: 'TuCarrito',
            emails: ['el_monojojoi@yahoo.com'],
            phoneNumber: '+1 305 467 9581',
            city: 'Weston',
            state: 'Florida',
            country: 'US',
            objectID: null,
            createdAt: 1611679657,
            updatedAt: 1611679657,
            companyLogoUrl: null,
            coverImageUrl: null,
            companyType: 'Automotive, tool & industrial',
            companyDescription: 'I sell auto parts',
            links: [],
            _tags: [],
            _geoloc: {
                lat: '',
                lng: '',
            },
            openingTime: 8,
            closingTime: 17,
            days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
            merchant: {
                uid: 'iql5R0BEThfc1yD7h98Uetd2kLe2',
                firstName: 'Andres',
                lastName: 'Aparicio',
            },
        },
        {
            _id: '601295c039c7f50fcfd9dd21',
            companyName: 'Testing',
            emails: ['himanshu2314@yopmail.com'],
            phoneNumber: '+1 1234567890',
            city: 'Weston',
            state: 'Florida',
            country: 'United States',
            objectID: null,
            createdAt: 1611830720,
            updatedAt: 1611830720,
            companyLogoUrl: 'https://apiqa.boomcard.net/api/v1/images/p7Pjr7P27vPZVwdQvALIXE2wLQB3_pozr36',
            coverImageUrl: null,
            companyType: 'Apparel, shoes, jewelry',
            companyDescription: 'testing',
            links: [],
            _tags: [],
            _geoloc: {
                lat: 25.7617,
                lng: -80.1918,
            },
            openingTime: 8,
            closingTime: 17,
            days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
            merchant: {
                uid: 'p7Pjr7P27vPZVwdQvALIXE2wLQB3',
                firstName: 'Himanshu',
                lastName: 'Rawat',
            },
        },
        {
            _id: '60221162eeddcb297e3ef4e2',
            companyName: 'testing',
            emails: ['himanshu0002@yopmail.com'],
            phoneNumber: '+1 650 555 0000',
            city: 'Weston',
            state: 'Florida',
            country: 'United States',
            objectID: null,
            createdAt: 1612845410,
            updatedAt: 1612845410,
            companyLogoUrl: 'https://apiqa.boomcard.net/api/v1/images/QKt8Y90nV0OHCFW8v0EJBIEGPrD2_lnoo0p',
            coverImageUrl: null,
            companyType: 'Apparel, shoes, jewelry',
            companyDescription: 'testing',
            links: [],
            _tags: [],
            _geoloc: {
                lat: 25.7617,
                lng: -80.1918,
            },
            openingTime: 8,
            closingTime: 17,
            days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
            merchant: {
                uid: 'QKt8Y90nV0OHCFW8v0EJBIEGPrD2',
                firstName: 'Himanshu',
                lastName: 'Rawat',
            },
        },
        {
            _id: '60391b8e38e91057588db917',
            companyName: 'Company',
            emails: ['mymail987@mailinator.com'],
            phoneNumber: '+1 803 393 5094',
            number: null,
            street1: null,
            street2: null,
            city: 'Weston',
            state: 'Florida',
            zip: '33333',
            country: 'USA',
            objectID: null,
            createdAt: 1614355342,
            updatedAt: 1614355342,
            companyLogoUrl: null,
            coverImageUrl: null,
            companyType: 'Apparel, shoes, jewelry',
            companyDescription: 'test',
            fein: null,
            years: null,
            storeType: null,
            links: [],
            _tags: [],
            _geoloc: {
                lat: 25.7617,
                lng: -80.1918,
            },
            openingTime: 8,
            closingTime: 17,
            days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
            merchant: {
                uid: 'r46DnUFWSdX61dBmSyUVfkgxc402',
                firstName: 'Bob',
                lastName: 'Tim',
            },
        },
        {
            _id: '603e712662c87e5e629220d4',
            companyName: 'TEST COMPANY NAME',
            emails: ['test@company.com'],
            phoneNumber: '+13050001122',
            number: '55',
            street1: 'weston road',
            street2: 'suite 106',
            city: 'Weston',
            state: 'FL',
            zip: '33326',
            country: 'US',
            objectID: null,
            createdAt: 1614704934,
            updatedAt: 1614704934,
            companyLogoUrl: 'https://picsum.photos/200',
            coverImageUrl: 'https://picsum.photos/200',
            companyType: 'Brick & Mortar',
            companyDescription: 'TEST PURPOSE ONLY',
            fein: 123456789,
            years: 5,
            storeType: 'Online',
            links: ['https://qa.boomcard.net/'],
            _tags: ['TEST'],
            _geoloc: {},
            openingTime: 0,
            closingTime: 0,
            days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
            merchant: {
                uid: 're5OljVl3KObKLopKdxpOQBWPL82',
                name: 'Daniel Steve',
                firstName: 'Daniel',
                lastName: 'Steve',
            },
        },
    ],
};
exports.GETStoreByIDResponseExamples = {
    // TODO: Update to use ResponseAPI
    SUCCESS: {
        _id: '603e712662c87e5e629220d4',
        companyName: 'TEST COMPANY NAME',
        emails: ['test@company.com'],
        phoneNumber: '+13050001122',
        number: '55',
        street1: 'weston road',
        street2: 'suite 106',
        city: 'Weston',
        state: 'FL',
        zip: '33326',
        country: 'US',
        objectID: null,
        createdAt: 1614704934,
        updatedAt: 1614704934,
        companyLogoUrl: 'https://picsum.photos/200',
        coverImageUrl: 'https://picsum.photos/200',
        companyType: 'Brick & Mortar',
        companyDescription: 'TEST PURPOSE ONLY',
        fein: 123456789,
        years: 5,
        storeType: 'Online',
        links: ['https://qa.boomcard.net/'],
        _tags: ['TEST'],
        _geoloc: {},
        openingTime: 0,
        closingTime: 0,
        days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
        merchant: {
            uid: 're5OljVl3KObKLopKdxpOQBWPL82',
            name: 'Daniel Steve',
            firstName: 'Daniel',
            lastName: 'Steve',
        },
    },
};
exports.PUTStoreByIDResponseExamples = {
    // TODO: Update to use ResponseAPI
    SUCCESS: {
        success: true,
        message: 'Store has been updated successfully',
        result: {
            _id: '603e712662c87e5e629220d4',
            companyName: 'TEST COMPANY NAME',
            emails: ['test@company.com'],
            phoneNumber: '+13050001122',
            number: '55',
            street1: 'weston road',
            street2: 'suite 106',
            city: 'Weston',
            state: 'FL',
            zip: '33326',
            country: 'US',
            pin: 12345,
            createdAt: 0,
            updatedAt: 1614788948,
            companyLogoUrl: 'https://picsum.photos/200',
            coverImageUrl: 'https://picsum.photos/200',
            companyType: 'Brick & Mortar',
            companyDescription: 'TEST PURPOSE ONLY',
            fein: 123456789,
            years: 5,
            storeType: 'Online',
            links: ['https://qa.boomcard.net/'],
            _tags: ['TEST'],
            _geoloc: {},
            openingTime: 3,
            closingTime: 3,
            days: ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'],
            merchant: {
                uid: 're5OljVl3KObKLopKdxpOQBWPL82',
                name: 'Daniel Steve',
                firstName: 'Daniel',
                lastName: 'Steve',
            },
        },
    },
};
//# sourceMappingURL=store-specifications-responses.js.map