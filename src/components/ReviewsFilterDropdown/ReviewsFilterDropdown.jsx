import React, { useState } from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import css from "./ReviewsFilterDropdown.module.css";

const sortOptions = [
  { label: "Latest", key: "latest" },
  { label: "Oldest", key: "oldest" },
  { label: "Highest Rating", key: "highest" },
  { label: "Lowest Rating", key: "lowest" },
];

const ReviewsFilterDropdown = ({ onChange }) => {
  const [selected, setSelected] = useState("latest");

  const handleMenuClick = ({ key }) => {
    setSelected(key);
    onChange && onChange(key);
  };

  const items = sortOptions.map((option) => ({
    label: option.label,
    key: option.key,
  }));

  return (
    <Dropdown
      menu={{ items, onClick: handleMenuClick }}
      trigger={["click"]}
      placement="bottomRight"
      arrow
    >
      <button className={css.filterDropdownBtn}>
        <Space>
          {sortOptions.find((o) => o.key === selected)?.label}
          <DownOutlined />
        </Space>
      </button>
    </Dropdown>
  );
};

export default ReviewsFilterDropdown;
