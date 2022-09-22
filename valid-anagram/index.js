/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let map1 = new Map()
    let map2 = new Map()

    let arr = []

    s.split('').forEach(char => {
        if(map1.get(char) == undefined) {
            map1.set(char, 1)
        } else {
            map1.set(char, map1.get(char) + 1)
        }
    })

    t.split('').forEach(char => {
        if(map2.get(char) == undefined) {
            map2.set(char, 1)
        } else {
            map2.set(char, map2.get(char) + 1)
        }
    })

    if(s.length > t.length) {
        s.split('').forEach(char => {
            if(map1.get(char) == map2.get(char)) {
                arr.push(true)
            } else {
                arr.push(false)
        }
        });
    } else {
        t.split('').forEach(char => {
            if(map1.get(char) == map2.get(char)) {
                arr.push(true)
            } else {
                arr.push(false)
            }
        });
    }

    if(arr.includes(false)) {
        return false
    } else {
        return true
    }
};

let str1 = 'jerobe'
let str2 = 'robee'

console.log(isAnagram(str1, str2))
