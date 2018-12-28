<!DOCTYPE html>
<html>
<head>
	<title>login</title>
</head>
<body>
	<?php 
		include 'config/fungsi_crud.php';
		$master_user = $konek->getMasterUser();
	?>
<form method="GET" action="session.php">
	<!-- <a href="index.php?token=adaan">click</a> -->
	<input type="text" name="token" placeholder="Token User">
	<input type="text" name="scen" placeholder="Nama dokumen">
	<select name="link">
		<option value="menu">Menu</option>
		<option value="menu_cb">Menu CB</option>
	</select>
	<input type="text" name="kondisi" value="plotting">
	<input type="submit" name="submit" value="Masuk">
</form>
<br>
<table border="1">
	<thead>
		<tr>
			<th>Username</th>
			<th>Token</th>
			<th>id User</th>
			<th>Nama User</th>
		</tr>
	</thead>
	<?php 
		foreach ($master_user as $key) {
	?>
		<tr>
			<td><?php echo $key['username']; ?></td>
			<td><?php echo $key['remember_token']; ?></td>
			<td><?php echo $key['id']; ?></td>
			<td><?php echo $key['name']; ?></td>
		</tr>
	<?php
		}
	 ?>
</table>
</body>
</html>