import {AxiosError, AxiosResponse} from 'axios';
import {toast} from 'react-toastify';




export const ServerErrorHandling = (err: AxiosError) => {

    


    console.log('err', err);
    if (err.response) {
        switch (err.response.status) {

            case 400:
                console.log('Error:::::400');
                console.log('اطلاعات ارسالی معتبر نیست');
                console.log('The request was invalid.');
               // toast.error('اطلاعات ارسالی معتبر نیست' );
               
                break;
            case 401:
                console.log('Error:::::401');
                console.log('توکن معتبر نیست');
                console.log('The request did not include an authentication token or the authentication token was expired.');
                //  toast.error('The request did not include an authentication token or the authentication token was expired.\n توکن معتبر نیست')
              //  toast.error('توکن معتبر نیست');
             
               
                break;
            case 403:
                console.log('Error:::::403');
                console.log('دسترسی لازم را ندارید');
                console.log('The client did not have permission to access the requested resource.');
               // toast.error('The client did not have permission to access the requested resource.\n دسترسی لازم را ندارید');

                break;
            case 404:
                console.log('Error:::::404');
                console.log('سرویس مورد نظر یافت نشد');
                console.log('The requested resource was not found.');

                toast.error((typeof err.response.data !== 'object'
                    ? err.response.data
                    : err.response.data.info.exception ||
                    err.response.data.info.message) || err.message
                );
                break;
            case 405:
                console.log('Error:::::405');
                console.log('این درخواست امکانپذیر نیست');
                console.log('The HTTP method in the request was not supported by the resource.');
                toast.error('The HTTP method in the request was not supported by the resource.\n این درخواست امکانپذیر نیست');
                break;
            case 409:
                console.log('Error:::::409');
                console.log('مشکل ثبت تکراری');
                console.log('The request could not be completed due to a conflict.');
                toast.error('The request could not be completed due to a conflict.\n مشکل ثبت تکراری');
                break;
            case 500:
                console.log('Error:::::500');
                console.log('درخواست به دلیل خطای داخلی در سمت سرور تکمیل نشده است');
                console.log('The request was not completed due to an internal error on the server side.');
                console.log(err);
                //  toast.error('The request was not completed due to an internal error on the server side.\n درخواست به دلیل خطای داخلی در سمت سرور تکمیل نشده است');
                toast.error(
                    (typeof err.response.data !== 'object'
                        ? 'درخواست به دلیل خطای داخلی در سمت سرور تکمیل نشده است'
                        : err.response.data.info.exception ||
                        err.response.data.info.message) || err.message
                );
                break;
            case 503:
                console.log('Error:::::503');
                console.log('سرور پیدا نشد ');
                console.log('Internet connection offline.');
                toast.error('Internet connection offline. \n مشکل اتصال به انترنت ');
                break;
            default:
                console.log(err);
                // toast.error("مشکل در ارتباط . مجدد تلاش نمایید");
                toast.error(
                    (typeof err.response.data !== 'object'
                        ? err.response.data
                        : err.response.data.message) || err.message
                );
        }
    } else {
        console.log('no-status-error', err);
        toast.error(err.message);
    }
    throw err;
};


export const DataErrorHandling = async (response: AxiosResponse) => {

    if (process.env.NODE_ENV !== 'production') {
         console.log(response.data);
        // console.log(response.statusText, response.status);
        // console.log(response.headers);
        // console.log(response.config);
    }
    
    if(response.data.info===undefined)
    return response;
    
    if (String(response.data.info.code).charAt(0) !== '2') {
        const msg = response.data.info.message || response.data.info.exception || 'اظلاعات ارسالی صحیح نیست.';
        toast.dark(msg);
        return response;
    } else {
        return response;
    }
};



