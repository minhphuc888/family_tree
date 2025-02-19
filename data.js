const data = [
    {
        "id": 1,
        "pids":
        [
            2
        ],
        "name": "Ông Nguyễn Minh Vượng",
        "yearOfBirth": 1923,
        "yearOfDeath": 2002,
        "dayOfDeath": "6/2 (AL)",
        "img": "img/.jpg"
    },
    {
        "id": 2,
        "pids":
        [
            1
        ],
        "dayOfDeath": "11/2 (AL)",
        "name": "Bà Lê Thị Thận",
        "yearOfBirth": 1925,
        "yearOfDeath": 2021,
        "img": "img/.jpg"
    },
    {
        "id": 3,
        "pids":
        [
            4
        ],
        "mid": 1,
        "fid": 2,
        "name": "Ông Nguyễn Minh Kim",
        "yearOfBirth": 1947,
        "yearOfDeath": 2022,
        "dayOfDeath": "8/6 (AL)",
        "img": "img/.jpg"
    },
    {
        "id": 4,
        "pids":
        [
            3
        ],
        "gender": "female",
        "name": "Bà Lê Thị Tùng",
        "yearOfBirth": 1952,
        "img": "img/.jpg"
    },
    {
        "id": 5,
        "pids":
        [
            6
        ],
        "yearOfBirth": 1952,
        "name": "Ông Lê Văn Tĩnh",
        "yearOfDeath": 2024,
        "img": "img/letinh.jpg"
    },
    {
        "id": 6,
        "mid": 1,
        "fid": 2,
        "pids":
        [
            5
        ],
        "gender": "female",
        "name": "Bà Nguyễn Thị Quỵ",
        "yearOfBirth": 1949,
        "img": "img/baquy.jpg"
    },
    {
        "id": 88,
        "mid": 1,
        "fid": 2,
        "yearOfBirth": 1955,
        "name": "Bà Nguyễn Thị Lợi",
        "gender": "female",
        "img": "img/loinguyen.jpg"
    },
    {
        "id": 8,
        "pids":
        [
            9
        ],
        "name": "Ông Nguyễn Văn Thi",
        "gender": "male",
        "yearOfBirth": 1949,
        "img": "img/trungthi.jpg"
    },
    {
        "id": 9,
        "pids":
        [
            8
        ],
        "mid": 1,
        "fid": 2,
        "name": "Bà Nguyễn Thị Trung",
        "gender": "female",
        "yearOfBirth": 1959,
        "img": "img/thitrung.jpg"
    },
    {
        "id": 10,
        "mid": 1,
        "fid": 2,
        "pids":
        [
            11
        ],
        "gender": "male",
        "name": "Ông Nguyễn Minh Quyền",
        "yearOfBirth": 1963,
        "img": "img/.jpg"
    },
    {
        "id": 11,
        "pids":
        [
            10
        ],
        "gender": "female",
        "name": "Bà Nguyễn Thị Lân",
        "yearOfBirth": 1969,
        "img": "img/nguyenlan.jpg"
    },
    {
        "id": 12,
        "pids":
        [
            13
        ],
        "gender": "male",
        "name": "Nguyễn Nam",
        "yearOfBirth": 04,
        "img": "img/.jpg"
    },
    {
        "id": 13,
        "mid": 4,
        "fid": 3,
        "pids":
        [
            12
        ],
        "gender": "female",
        "name": "Nguyễn Thị Liên",
        "yearOfBirth": 1976,
        "img": "img/liennguyen.jpg"
    },
    {
        "id": 14,
        "pids":
        [
            15
        ],
        "gender": "male",
        "name": "Nguyễn Minh Sơn",
        "yearOfBirth": 1978,
        "img": "img/sonnguyen.jpg"
    },
    {
        "id": 15,
        "mid": 4,
        "fid": 3,
        "pids":
        [
            14
        ],
        "gender": "female",
        "name": "Đỗ Lập",
        "yearOfBirth": 02,
        "img": "img/dolap.jpg"
    },
    {
        "id": 16,
        "mid": 4,
        "fid": 3,
        "gender": "male",
        "name": "Nguyễn Minh Thắng",
        "yearOfBirth": 1983,
        "img": "img/.jpg"
    },
    {
        "id": 17,
        "mid": 4,
        "fid": 3,
        "pids":
        [
            18
        ],
        "gender": "male",
        "name": "Nguyễn Minh Mạnh",
        "yearOfBirth": 1986,
        "img": "img/.jpg"
    },
    {
        "id": 18,
        "pids":
        [
            17
        ],
        "gender": "female",
        "name": "Nguyễn Hương",
        "yearOfBirth": 1987,
        "img": "img/namhuong.jpg"
    },
    {
        "id": 19,
        "pids":
        [
            20
        ],
        "gender": "male",
        "name": "Nguyễn Nam",
        "yearOfBirth": 199,
        "img": "img/.jpg"
    },
    {
        "id": 20,
        "mid": 4,
        "fid": 3,
        "pids":
        [
            19
        ],
        "gender": "female",
        "name": "Nguyễn Thị Luy",
        "yearOfBirth": 0,
        "img": "img/luynguyen.jpg"
    },
    {
        "id": 21,
        "mid": 6,
        "fid": 5,
        "pids":
        [
            22
        ],
        "gender": "male",
        "name": "Lê Trịnh",
        "yearOfBirth": 0,
        "img": "img/letrinh.jpg"
    },
    {
        "id": 22,
        "pids":
        [
            21
        ],
        "gender": "female",
        "name": "Lê Thị Loan",
        "yearOfBirth": 0,
        "img": "img/loanle.jpg"
    },
    {
        "id": 23,
        "mid": 6,
        "fid": 5,
        "pids":
        [
            24
        ],
        "gender": "male",
        "name": "Đỗ Vũ",
        "yearOfBirth": 0,
        "img": "img/dovu.jpg"
    },
    {
        "id": 24,
        "pids":
        [
            23
        ],
        "gender": "female",
        "name": "Lê Thị Thanh",
        "yearOfBirth": 0,
        "img": "img/thanhle.jpg"
    },
    {
        "id": 25,
        "mid": 6,
        "fid": 5,
        "pids":
        [
            26
        ],
        "gender": "male",
        "name": "Lê Văn Thỉnh",
        "yearOfBirth": 0,
        "img": "img/lethinh.jpg"
    },
    {
        "id": 26,
        "pids":
        [
            25
        ],
        "gender": "female",
        "name": "Nguyễn Thị Hoa",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 27,
        "mid": 6,
        "fid": 5,
        "pids":
        [
            28
        ],
        "gender": "male",
        "name": "Lê Thị Thảnh",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 28,
        "pids":
        [
            27
        ],
        "gender": "female",
        "name": "Liên",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 29,
        "mid": 6,
        "fid": 5,
        "pids":
        [
            30
        ],
        "gender": "male",
        "name": "Lê Văn Thảo",
        "yearOfBirth": 1987,
        "img": "img/thaole.jpg"
    },
    {
        "id": 30,
        "pids":
        [
            29
        ],
        "gender": "female",
        "name": "Linh",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 888,
        "mid": 88,
        "gender": "male",
        "name": "Nguyễn Minh Phúc",
        "yearOfBirth": 1993,
        "img": "img/phucnguyen.jpg"
    },
    {
        "id": 31,
        "mid": 9,
        "fid": 8,
        "pids":
        [
            32
        ],
        "gender": "male",
        "name": "Nguyễn Quang Cử",
        "yearOfBirth": 0,
        "img": "img/quangcu.jpg"
    },
    {
        "id": 32,
        "pids":
        [
            31
        ],
        "gender": "female",
        "name": "Nguyễn ...",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 33,
        "mid": 9,
        "fid": 8,
        "pids":
        [
            34
        ],
        "gender": "male",
        "name": "Nguyễn Quang Huy",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 34,
        "pids":
        [
            33
        ],
        "gender": "female",
        "name": "Cao Thu Trang",
        "yearOfBirth": 1992,
        "img": "img/caotrang.jpg"
    },
    {
        "id": 35,
        "mid": 11,
        "fid": 10,
        "gender": "male",
        "name": "Nguyễn Minh Quang",
        "yearOfBirth": 1992,
        "img": "img/quangquyen.jpg"
    },
    {
        "id": 36,
        "mid": 11,
        "fid": 10,
        "gender": "male",
        "name": "Nguyễn Minh Quyết",
        "yearOfBirth": 1999,
        "img": "img/quyetquyen.jpg"
    },
    {
        "id": 37,
        "mid": 12,
        "fid": 13,
        "gender": "female",
        "name": "Trâm Anh",
        "yearOfBirth": 2002,
        "img": "img/tramanh.jpg"
    },
    {
        "id": 38,
        "mid": 12,
        "fid": 13,
        "gender": "male",
        "name": "ccc",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 39,
        "mid": 12,
        "fid": 13,
        "gender": "male",
        "name": "Nguyễn NoName",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 40,
        "mid": 14,
        "fid": 15,
        "gender": "male",
        "name": "Nguyễn Minh Tân",
        "yearOfBirth": 2016,
        "img": "img/minhtan.jpg"
    },
    {
        "id": 41,
        "mid": 14,
        "fid": 15,
        "gender": "female",
        "name": "Nguyễn NoName",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 42,
        "mid": 17,
        "fid": 18,
        "gender": "male",
        "name": "Nguyễn Thị Bảo Nhiên",
        "yearOfBirth": 2014,
        "img": "img/.jpg"
    },
    {
        "id": 43,
        "mid": 17,
        "fid": 18,
        "gender": "male",
        "name": "Nguyễn Thị Gia Hân",
        "yearOfBirth": 2016,
        "img": "img/.jpg"
    },
    {
        "id": 44,
        "mid": 19,
        "fid": 20,
        "gender": "male",
        "name": "Nguyễn NoName",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 45,
        "mid": 19,
        "fid": 20,
        "gender": "male",
        "name": "Nguyễn NoName",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 46,
        "pids":
        [
            51
        ],
        "mid": 21,
        "fid": 22,
        "gender": "female",
        "name": "Lê Thị Hiền",
        "yearOfBirth": 0,
        "img": "img/hientrinh.jpg"
    },
    {
        "id": 51,
        "pids":
        [
            46
        ],
        "gender": "male",
        "name": "Lê Thanh Hùng",
        "yearOfBirth": 0,
        "img": "img/thanhhung.jpg"
    },
    {
        "id": 47,
        "mid": 21,
        "fid": 22,
        "gender": "female",
        "name": "Lê Thị Phương",
        "yearOfBirth": 0,
        "img": "img/phuongle.jpg"
    },
    {
        "id": 48,
        "mid": 21,
        "fid": 22,
        "gender": "male",
        "name": "Lê Văn Cường",
        "yearOfBirth": 0,
        "img": "img/lecuong.jpg"
    },
    {
        "id": 49,
        "mid": 23,
        "fid": 24,
        "gender": "female",
        "name": "Đỗ Anh Thư",
        "yearOfBirth": 2000,
        "img": "img/dothu.jpg"
    },
    {
        "id": 50,
        "mid": 23,
        "fid": 24,
        "gender": "female",
        "name": "Đỗ ",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 52,
        "pids":
        [
            53
        ],
        "gender": "male",
        "name": "Bùi Dưỡng",
        "yearOfBirth": 0,
        "img": "img/duong.jpg"
    },
    {
        "id": 53,
        "pids":
        [
            52
        ],
        "mid": 27,
        "fid": 28,
        "gender": "female",
        "name": "Trần Thị Hòa",
        "yearOfBirth": 0,
        "img": "img/hoale.jpg"
    },
    {
        "id": 54,
        "mid": 27,
        "fid": 28,
        "gender": "female",
        "name": "Trần Thị Thu Thủy",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 55,
        "mid": 27,
        "fid": 28,
        "gender": "female",
        "name": "Trần Thị Kim Ngân",
        "yearOfBirth": 0,
        "img": "img/kimngan.jpg"
    },
    {
        "id": 56,
        "mid": 25,
        "fid": 26,
        "gender": "male",
        "name": "Lê Văn Tài",
        "yearOfBirth": 2005,
        "img": "img/.jpg"
    },
    {
        "id": 57,
        "mid": 25,
        "fid": 26,
        "gender": "male",
        "name": "Nguyễn NoName",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 57,
        "mid": 29,
        "fid": 30,
        "gender": "male",
        "name": "Nguyễn NoName",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 58,
        "mid": 29,
        "fid": 30,
        "gender": "male",
        "name": "Lê Văn Đạt",
        "yearOfBirth": 0,
        "img": "img/ledat.jpg"
    },
    {
        "id": 59,
        "mid": 31,
        "fid": 32,
        "name": "Nguyễn NoName",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 60,
        "mid": 31,
        "fid": 32,
        "gender": "male",
        "name": "Nguyễn NoName",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 61,
        "mid": 31,
        "fid": 32,
        "gender": "male",
        "name": "Nguyễn NoName",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 62,
        "mid": 33,
        "fid": 34,
        "gender": "female",
        "name": "Nguyễn NoName",
        "yearOfBirth": 0,
        "img": "img/.jpg"
    },
    {
        "id": 63,
        "mid": 52,
        "fid": 53,
        "gender": "female",
        "name": "Cà Chua",
        "yearOfBirth": 0,
        "img": "img/cachua.jpg"
    }
]