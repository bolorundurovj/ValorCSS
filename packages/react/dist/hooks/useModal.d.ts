export interface UseModalReturn {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}
/**
 * Hook for managing modal state
 *
 * @param defaultOpen - Initial open state
 * @returns Modal state and control functions
 *
 * @example
 * ```tsx
 * const { isOpen, open, close } = useModal();
 *
 * return (
 *   <>
 *     <Button onClick={open}>Open Modal</Button>
 *     <Modal isOpen={isOpen} onClose={close}>
 *       <Modal.Header>
 *         <Modal.Title>Modal Title</Modal.Title>
 *       </Modal.Header>
 *       <Modal.Body>Modal content</Modal.Body>
 *     </Modal>
 *   </>
 * );
 * ```
 */
export declare function useModal(defaultOpen?: boolean): UseModalReturn;
//# sourceMappingURL=useModal.d.ts.map