import { useState } from "react";

export const CustomDropdown=( yearOptions:String[] ):any=> {
  
  const [selectedYear, setSelectedYear] = useState<String>("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (year:String) => {
    setSelectedYear(year);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {selectedYear ? selectedYear : "Select year"}
      </div>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            minWidth: "160px",
            backgroundColor: "#fff",
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
            zIndex: "1",
            borderRadius: "4px",
          }}
        >
          {yearOptions.map((year:String) => (
            <div
              onClick={() => handleSelect(year)}
              style={{
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {year}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
