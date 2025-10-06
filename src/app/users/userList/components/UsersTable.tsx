"use client";

import styles from "./UsersTable.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

import { users } from "../../../data/users";

import { FaEye } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function UserTable() {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [visibleCount, setVisibleCount] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * visibleCount;
  const endIndex = startIndex + visibleCount;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredUsers.length / visibleCount);

  const allSelected = paginatedUsers.every((user) =>
    selectedUsers.includes(user.id)
  );

  const toggleAll = () => {
    if (allSelected) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers((prev) => {
        const currentPageIds = paginatedUsers.map((user) => user.id);
        const isAllSelected = currentPageIds.every((id) => prev.includes(id));

        if (isAllSelected) {
          // sadece bu sayfadakileri kaldır
          return prev.filter((id) => !currentPageIds.includes(id));
        } else {
          // sadece bu sayfadakileri ekle
          return [...new Set([...prev, ...currentPageIds])];
        }
      });
    }
  };

  const toggleUser = (id: number) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [searchQuery, visibleCount, totalPages]);

  return (
    <div className={styles.container}>
      {/* Actions */}
      <div className={styles.actions}>
        <div className={styles.leftActions}>
          <select
            className={styles.selectBox}
            value={visibleCount}
            onChange={(e) => {
              setVisibleCount(parseInt(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option>5</option>
            <option>10</option>
          </select>
          <button className={styles.addButton}>Kullanıcı Ekle</button>
        </div>

        <div className={styles.rightActions}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Ara"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={styles.exportButton}>
            <FiDownload style={{ marginRight: "6px" }} />
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <label className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={allSelected}
                  onChange={toggleAll}
                />
                <span className={styles.customCheck}></span>
              </label>
            </th>
            <th>İsim</th>
            <th>Kullanıcı Tipi</th>
            <th>Durum</th>
            <th>Şehir</th>
            <th>Detay</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user.id}>
              <th>
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => toggleUser(user.id)}
                  />
                  <span className={styles.customCheck}></span>
                </label>
              </th>
              <td>
                <div className={styles.userCell}>
                  <img
                    src={`https://i.pravatar.cc/150?u=${user.id}`}
                    alt="pp"
                  />
                  <div>
                    <strong>{user.name}</strong>
                    <br />
                    <span className={styles.email}>{user.email}</span>
                  </div>
                </div>
              </td>
              <td>{user.type}</td>
              <td>
                <span
                  className={`${styles.status} ${
                    styles[user.status.toLowerCase()]
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td>{user.city}</td>
              <td>
                <Link href={`/users/userList/userDetail/${user.id}/user`}>
                  <span className={styles.eye}>
                    <FaEye />
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            className={`${styles.pageButton} ${
              n === currentPage ? styles.activePage : ""
            }`}
            onClick={() => handlePageChange(n)}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

export default UserTable;
