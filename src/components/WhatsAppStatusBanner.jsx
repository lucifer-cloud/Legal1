"use client";

import React, { useEffect, useState } from "react";
import { Banner, Button, Modal, useModal } from "@payloadcms/ui";
import { MinimalTemplate } from "@payloadcms/next/templates";

const WhatsAppStatusBanner = () => {
  const [status, setStatus] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [qrImage, setQrImage] = useState(null);
  const [qrLoading, setQrLoading] = useState(false);
  const { toggleModal } = useModal();
  const modalSlug = "whatsappModal";

  const fetchStatus = async () => {
    try {
      const res = await fetch("/api/whatsapp?limit=1");
      const data = await res.json();
      const currentStatus = data?.docs?.[0]?.CurrentStatus;
      console.log(currentStatus)
      setStatus(currentStatus);
      return currentStatus;
    } catch (e) {
      setStatus("inactive");
      return "inactive";
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchQR = async () => {
    setQrLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WATSAPP_SERVICE_URL}/qr-image`
      );
      const data = await res.json();
      setQrImage(data.image);
    } catch (e) {
      setQrImage(null);
    } finally {
      setQrLoading(false);
    }
  };

  const handleShowQR = () => {
    setShowQR(true); // Local state for polling check
    toggleModal(modalSlug);
    fetchQR();
  };

  const handleCloseQR = () => {
    setShowQR(false);
    toggleModal(modalSlug);
  };

  // ✅ Poll every 10 seconds when modal is open
  useEffect(() => {
    let interval;

    if (showQR) {
      interval = setInterval(async () => {
        const latestStatus = await fetchStatus();
        if (latestStatus == "active") {
          handleCloseQR(); // Automatically close modal
        }
      }, 20000); // 10 seconds

    }

    return () => {
      clearInterval(interval);
    };
  }, [showQR]);
  if(status == "")return null
  if ( status == "active") return (
    <Banner type='success' className="flex items-center justify-between gap-4">
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ paddingRight: "10px" }}>
          ✅ WhatsApp Connected
          </p>          
        </div>
      </Banner>
  );

  return (
    <>
      <Banner type="error" className="flex items-center justify-between gap-4">
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ paddingRight: "10px" }}>
            🚫 WhatsApp connection is <strong>inactive</strong>
          </p>
          <Button
            onClick={handleShowQR}
            size="small"
            variant="secondary"
            type="button"
            className="scanQRButton"
          >
            {status == "active" ? "WhatsApp Connected" : "Scan QR"}
          </Button>
        </div>
      </Banner>

      <Modal slug={modalSlug} className="delete-document">
        <MinimalTemplate
          className="confirmation-modal__wrapper delete-document__template delete-document__wrapper"
          width="wide"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "20px",
              height: 0,
            }}
          >
            <Button
              onClick={handleCloseQR}
              icon="x"
              iconPosition="right"
              buttonStyle="icon-label"
              iconStyle="without-border"
            />
          </div>
          <div style={{ height: "80vh", overflowY: "auto", padding: 0 }}>
            <div
              className="table"
              style={{
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h4>Please scan the QR code to connect with WhatsApp Web</h4>
              <div className="p-4 text-center">
                {qrLoading && <p>Loading QR code...</p>}
                {!qrLoading && qrImage && (
                  <img
                    src={qrImage}
                    alt="QR Code"
                    className="mx-auto max-w-xs"
                  />
                )}
                {!qrLoading && !qrImage && (
                  <p>Unable to load QR code. Try again.</p>
                )}
              </div>
              <p>
                QR code may expire in 30 seconds, so click "Refresh QR" to
                regenerate the QR code.
              </p>
              <Button onClick={fetchQR} type="button">
                Refresh QR
              </Button>
            </div>
          </div>
        </MinimalTemplate>
      </Modal>
    </>
  );
};

export default WhatsAppStatusBanner;
