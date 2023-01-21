// import { ContainerInstance } from 'typedi';
// import { ExampleController } from '../../src/api/v1/controllers';
// import { ExampleFacadeImpl } from '../../src/api/v1/facade/impl';

// let instance: ContainerInstance;
// let mockResponse;
// describe('exampleController Suite Test', () => {
//     beforeEach(() => {
//         jest.mock('../../src/api/v1/facade/impl');
//         instance = new ContainerInstance('id');
//         mockResponse = () => {
//             const res = { statusCode: 0, status: null, json: null };
//             res.status = jest.fn().mockImplementationOnce((status: number) => {
//                 res.statusCode = status;
//                 return res;
//             });
//             res.json = jest.fn().mockImplementationOnce(() => {
//                 return res;
//             });
//             return res;
//         };
//     });
//     it('should return status code 204 in case array is empty', async (done) => {
//         try {
//             jest.spyOn(ExampleFacadeImpl.prototype, 'getAll')
//                 .mockImplementation()
//                 .mockImplementationOnce(
//                     () => new Promise((resolve) => {
//                         resolve([]);
//                     }),
//                 );
//             const res = mockResponse();
//             const controller = new ExampleController(instance);
//             await controller.getAll(null, res);
//             expect(200);
//             done();
//         } catch (err) {
//             done(err);
//         }
//     });
// });
