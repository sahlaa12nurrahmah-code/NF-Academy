<!DOCTYPE html>
<html>
<head>
    <title>Form Nilai Ujian</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f6fa;
            margin: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        h2 {
            color: #333;
            margin-bottom: 10px;
        }

        form, .hasil {
            background-color: #fff;
            width: 350px;
            padding: 20px 25px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            margin: 10px 0;
        }

        label {
            font-weight: bold;
        }

        input[type="text"],
        input[type="email"],
        input[type="number"] {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }

        input[type="submit"] {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px;
            width: 100%;
            margin-top: 15px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: background 0.3s;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }

        .hasil h3 {
            margin-top: 0;
            color: #333;
        }

        .status-lulus {
            color: #28a745; /* hijau */
            font-weight: bold;
        }

        .status-remedial {
            color: #dc3545; /* merah */
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h2>Form Nilai Ujian</h2>
    <form method="POST" action="">
        <label>Nama:</label><br>
        <input type="text" name="nama" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>Nilai Ujian:</label><br>
        <input type="number" name="nilai" required><br><br>

        <input type="submit" value="Kirim">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        echo "<div class='hasil'>";
        echo "<h3>Hasil Input:</h3>";
        echo "Nama: $nama <br>";
        echo "Email: $email <br>";
        echo "Nilai Ujian: $nilai <br>";

        if ($nilai > 70) {
            echo "<p class='status-lulus'>Status: Lulus 🎉</p>";
        } else {
            echo "<p class='status-remedial'>Status: Remedial 😅</p>";
        }
        echo "</div>";
    }
    ?>
</body>
</html>