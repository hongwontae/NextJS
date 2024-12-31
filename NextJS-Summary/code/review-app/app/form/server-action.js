'use server';
export async function actionHandler(prevData, formData) {
    "use server";
    const info = {
        name : formData.get('name'),
        age : formData.get('age')
    }
    console.log(info)
    return {
        message : 'Save Fine'
    }
  }