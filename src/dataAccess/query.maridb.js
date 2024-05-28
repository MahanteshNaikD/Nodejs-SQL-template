module.exports ={
    createOne: (table, query) => {
        return new Promise((resolve, reject) => {
            table.create(query)
                .then((data) => {
                    resolve(data)
                }).catch((err) => {
                    resolve({ code: 500, message: err.parent.hint })
                })
        })
    },
    findAll: (table, query) => {
        return new Promise((resolve, reject) => {
            table.findAll(query)
                .then((data) => {
                    resolve(data)
                }).catch((err) => {
                    resolve({ code: 500, message: err.parent.hint })
                })
        })
    },
    findOne: (table, query) => {
        return new Promise((resolve, reject) => {
            table.findOne(query)
                .then((data) => {
                    resolve(data)
                }).catch((err) => {
                    resolve({ code: 500, message: err.parent.hint })
                })
        })
    },
    destroy: (table, query) => {

        return new Promise((resolve, reject) => {
            if (!query) {
                resolve({ code: 500, message: 'Invalid query' })
            }
            table.destroy(query)
                .then((data) => {
                    resolve(data)
                }).catch((err) => {
                    resolve({ code: 500, message: err.parent.hint })
                })
        })
    },
    findOneUpdate: (table, updatefield, query) => {
        return new Promise((resolve) => {
          if (!query) {
            resolve({ status: false, message: "Invalid query" });
          }
          table
            .update(updatefield, query)
            .then((data) => {
              resolve({ status: true, data: data });
            })
            .catch((err) => {
              console.log("Error while updating to DB: ", err.message);
              resolve({ status: false, message: "Unable to delete" });
            });
        });
      },
}